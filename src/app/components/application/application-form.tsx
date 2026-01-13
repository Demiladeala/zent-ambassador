/** biome-ignore-all lint/a11y/noLabelWithoutControl: <explanation> */
/** biome-ignore-all lint/suspicious/noExplicitAny: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Loader2 } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, Toaster } from "sonner";
import { useRouter } from "next/navigation";

type ApplicationFormData = z.infer<typeof applicationSchema>;
type CountryCode = {
  name: string;
  code: string;
};

const SOCIAL_PLATFORMS = [
  { id: "instagram", label: "Instagram" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "twitter", label: "Twitter" },
  { id: "tiktok", label: "TikTok" },
  { id: "facebook", label: "Facebook" },
  { id: "youtube", label: "YouTube" },
];

export const applicationSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Enter a valid email"),
  countryCode: z.string().min(1),
  phone: z.string().min(5, "Phone number is required"),
  community_size: z.string().min(1, "Community size is required"),
  mission_and_target_audience: z.string().min(1, "This field is required"),
  social_platforms: z.array(z.string()).min(1, "Select at least one platform"),
  average_engagement_rate: z
    .number()
    .min(0, "Engagement rate must be at least 0")
    .max(100, "Engagement rate cannot exceed 100")
    .refine(
      (val: { toString: () => string }) =>
        /^\d+(\.\d{1,2})?$/.test(val.toString()),
      {
        message: "Engagement rate can have up to 2 decimal places",
      }
    ),

  past_collaborations_or_partnerships: z
    .string()
    .min(1, "This field is required"),
  agree_to_post_zent: z.boolean().refine((val) => val === true, {
    message: "You must agree to post Zent content",
  }),

  agree_to_provide_engagement_proof: z.boolean().refine((val) => val === true, {
    message: "You must agree to provide engagement proof",
  }),
});

export function ApplicationForm() {
  const [countryCodes, setCountryCodes] = useState<CountryCode[]>([]);

  useEffect(() => {
    async function loadCodes() {
      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,idd"
      );
      const data = await res.json();

      const codes = data
        .filter((c: any) => c.idd?.root)
        .map((c: any) => ({
          name: c.name.common,
          code: `${c.idd.root}${c.idd.suffixes?.[0] || ""}`,
        }))
        .sort((a: CountryCode, b: CountryCode) => a.name.localeCompare(b.name));

      setCountryCodes(codes);
    }

    loadCodes();
  }, []);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      countryCode: "+234",
      social_platforms: [],
      agree_to_post_zent: false,
      agree_to_provide_engagement_proof: false,
    },
  });

  const [proofFile, setProofFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (values: ApplicationFormData) => {
    const phone = `${values.countryCode}${values.phone}`;

    try {
      let response: any;

      if (proofFile) {
        const payload = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            payload.append(key, JSON.stringify(value));
          } else {
            payload.append(key, String(value));
          }
        });
        payload.append("phone", phone);
        payload.append("proof", proofFile);

        response = await fetch(
          "https://zent-backend-app-18c581b169a0.herokuapp.com/api/v1/ambassador/applications/submit/",
          { method: "POST", body: payload }
        );
      } else {
        response = await fetch(
          "https://zent-backend-app-18c581b169a0.herokuapp.com/api/v1/ambassador/applications/submit/",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...values, phone }),
          }
        );
      }

      const result = await response.json();

      if (!response.ok) {
        toast.error(result?.message || "Submission failed. Please try again.");
        return;
      }

      toast.success("Application submitted successfully");
      router.push("/application/thank-you");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative bg-white py-8 lg:py-16 px-4">
      <Toaster />
      <div className="max-w-2xl mx-auto">
        <div className="">
          {/* Form Column */}
          <div className="md:col-span-2">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold text-center mb-4">
                Application Form
              </h1>
              <p className="text-gray-600 mb-8 text-center lg:w-[80%] mx-auto">
                Note: Limited slots available. Don't miss out on this chance to
                grow your income and influence while making impact.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* First and Last Name Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium mb-2"
                  >
                    First name <span className="text-red-500">*</span>
                  </label>
                  <input
                    style={{
                      boxShadow: "0px 0px 4px 1px #4A62FF0F",
                    }}
                    {...register("first_name")}
                    placeholder="First name"
                    className={`w-full px-4 py-3 placeholder:text-[#7D7D7D] rounded-lg
    ${
      errors.first_name ? "border border-red-500" : "border-2 border-[#EEEBFC]"
    }`}
                  />
                  {errors.first_name && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.first_name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium mb-2"
                  >
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <input
                    style={{
                      boxShadow: "0px 0px 4px 1px #4A62FF0F",
                    }}
                    {...register("last_name")}
                    placeholder="Last name"
                    className={`w-full px-4 py-3 placeholder:text-[#7D7D7D] rounded-lg
    ${
      errors.last_name ? "border border-red-500" : "border-2 border-[#EEEBFC]"
    }`}
                  />
                  {errors.last_name && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.last_name.message}
                    </p>
                  )}
                </div>
              </div>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your email address <span className="text-red-500">*</span>
                </label>
                <input
                  style={{
                    boxShadow: "0px 0px 4px 1px #4A62FF0F",
                  }}
                  {...register("email")}
                  placeholder="Enter email address"
                  className={`w-full px-4 py-3 placeholder:text-[#7D7D7D] rounded-lg
    ${errors.email ? "border border-red-500" : "border-2 border-[#EEEBFC]"}`}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Your phone number <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <div className="relative">
                    <select
                      {...register("countryCode")}
                      // className="px-4 py-3 border-2 border-2 border-[#EEEBFC] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none pr-8"
                      className="max-w-44 appearance-none px-4 py-3 border-2 rounded-lg bg-white"
                    >
                      {countryCodes.map((c, index) => (
                        <option key={index} value={c.code}>
                          {c.name} ({c.code})
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2 top-3.5 w-4 h-4 pointer-events-none text-gray-600" />
                  </div>
                  <input
                    style={{
                      boxShadow: "0px 0px 4px 1px #4A62FF0F",
                    }}
                    {...register("phone")}
                    placeholder="Enter phone number"
                    className={`w-full px-4 py-3 placeholder:text-[#7D7D7D] rounded-lg
    ${errors.phone ? "border border-red-500" : "border-2 border-[#EEEBFC]"}`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              {/* Community Size */}
              <div>
                <label
                  htmlFor="community_size"
                  className="block text-sm font-medium mb-2"
                >
                  Community size (Followers/members){" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  style={{
                    boxShadow: "0px 0px 4px 1px #4A62FF0F",
                  }}
                  {...register("community_size")}
                  placeholder="e.g 10,000"
                  className={`w-full px-4 py-3 placeholder:text-[#7D7D7D] rounded-lg
    ${
      errors.community_size
        ? "border border-red-500"
        : "border-2 border-[#EEEBFC]"
    }`}
                />
                {errors.community_size && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.community_size.message}
                  </p>
                )}
              </div>
              {/* Mission & Target Audience */}
              <div>
                <label
                  htmlFor="mission_and_target_audience"
                  className="block text-sm font-medium mb-2"
                >
                  Mission & target audience{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  style={{
                    boxShadow: "0px 0px 4px 1px #4A62FF0F",
                  }}
                  {...register("mission_and_target_audience")}
                  placeholder="Enter response"
                  rows={4}
                  className="resize-none w-full px-4 py-3 placeholder:text-[#7D7D7D] border-2 border-[#EEEBFC] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
                {errors.mission_and_target_audience && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.mission_and_target_audience.message}
                  </p>
                )}
              </div>
              {/* Social Media Platforms */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Social media platforms <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {SOCIAL_PLATFORMS.map((platform) => {
                    const selected = watch("social_platforms");

                    return (
                      <label
                        key={platform.id}
                        className="flex items-center gap-2"
                      >
                        <input
                          style={{
                            boxShadow: "0px 0px 4px 1px #4A62FF0F",
                          }}
                          type="checkbox"
                          className="accent-black"
                          checked={selected.includes(platform.id)}
                          onChange={(e) => {
                            setValue(
                              "social_platforms",
                              e.target.checked
                                ? [...selected, platform.id]
                                : selected.filter(
                                    (p: string) => p !== platform.id
                                  ),
                              { shouldValidate: true }
                            );
                          }}
                        />
                        <span>{platform.label}</span>
                      </label>
                    );
                  })}

                  {errors.social_platforms && (
                    <p className="text-sm text-red-500">
                      {errors.social_platforms.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-2">
                {/* Engagement Rate */}
                <div className="w-full lg:basis-[40%]">
                  <label
                    htmlFor="average_engagement_rate"
                    className="block text-sm font-medium mb-2"
                  >
                    Average engagement rate{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    style={{
                      boxShadow: "0px 0px 4px 1px #4A62FF0F",
                    }}
                    type="number"
                    step="0.01"
                    min={0}
                    max={100}
                    {...register("average_engagement_rate", {
                      valueAsNumber: true,
                    })}
                    placeholder="Enter average rate (%)"
                    className={`w-full px-4 py-3 placeholder:text-[#7D7D7D] rounded-lg
                      [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
    ${
      errors.average_engagement_rate
        ? "border border-red-500"
        : "border-2 border-[#EEEBFC]"
    }`}
                  />
                  {errors.average_engagement_rate && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.average_engagement_rate.message}
                    </p>
                  )}
                </div>
                {/* File Upload */}
                <div className="w-full lg:basis-[60%] ">
                  <label className="block text-sm font-medium mb-2">
                    Upload proof{" "}
                    <span className="text-gray-500">(Optional)</span>
                  </label>
                  <div className="flex items-center border-2 border-[#EEEBFC] rounded-lg p-2 gap-2">
                    <input
                      style={{
                        boxShadow: "0px 0px 4px 1px #4A62FF0F",
                      }}
                      ref={fileInputRef}
                      accept=".pdf,.jpg,.jpeg,.png"
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files?.[0]) {
                          setProofFile(e.target.files[0]);
                        }
                      }}
                    />
                    <input
                      style={{
                        boxShadow: "0px 0px 4px 1px #4A62FF0F",
                      }}
                      type="text"
                      placeholder=" Upload proof (optional)"
                      value={proofFile?.name || ""}
                      readOnly
                      className="max-lg:w-[60%] flex-1 px-4 border-0 focus:outline-none rounded-lg bg-white text-gray-600"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="shrink-0 px-4 py-[3px] border-2 border-[#EEEBFC] rounded-lg bg-white text-gray-700 hover:bg-gray-50 font-medium"
                    >
                      Choose file
                    </button>
                  </div>
                </div>
              </div>
              {/* Post Collaborations */}
              <div>
                <label
                  htmlFor="past_collaborations_or_partnerships"
                  className="block text-sm font-medium mb-2"
                >
                  Post collaborations or Partnerships{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  style={{
                    boxShadow: "0px 0px 4px 1px #4A62FF0F",
                  }}
                  {...register("past_collaborations_or_partnerships")}
                  placeholder="Describe previous campaigns/brands worked with"
                  rows={4}
                  className="resize-none w-full px-4 py-3 placeholder:text-[#7D7D7D] border-2 border-[#EEEBFC] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
                {errors.past_collaborations_or_partnerships && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.past_collaborations_or_partnerships.message}
                  </p>
                )}
              </div>
              {/* Agreement & Compliance */}
              <div className="space-y-3">
                <label className="block text-sm font-medium">
                  Agreement & Compliance <span className="text-red-500">*</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    style={{
                      boxShadow: "0px 0px 4px 1px #4A62FF0F",
                    }}
                    {...register("agree_to_post_zent")}
                    className="accent-black w-4 h-4 mt-1 rounded border-gray-300 text-black focus:ring-black"
                  />

                  <span className="text-sm">
                    I hereby agree to post Zent video & tag official account
                  </span>
                </label>
                {errors.agree_to_post_zent && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.agree_to_post_zent.message}
                  </p>
                )}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    style={{
                      boxShadow: "0px 0px 4px 1px #4A62FF0F",
                    }}
                    {...register("agree_to_provide_engagement_proof")}
                    className="accent-black w-4 h-4 mt-1 rounded border-gray-300 text-black focus:ring-black"
                  />

                  <span className="text-sm">
                    I hereby agree to provide engagement proof
                  </span>
                </label>
                {errors.agree_to_provide_engagement_proof && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.agree_to_provide_engagement_proof.message}
                  </p>
                )}
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white flex items-center justify-center gap-2 py-3 font-semibold hover:bg-gray-900 transition-colors rounded-lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <p>Submitting..</p>
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

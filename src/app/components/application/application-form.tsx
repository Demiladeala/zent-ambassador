/** biome-ignore-all lint/a11y/noLabelWithoutControl: <explanation> */
"use client";

import type React from "react";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const SOCIAL_PLATFORMS = [
  { id: "instagram", label: "Instagram" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "twitter", label: "Twitter" },
  { id: "tiktok", label: "TikTok" },
  { id: "facebook", label: "Facebook" },
  { id: "youtube", label: "YouTube" },
];

export function ApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+234",
    phoneNumber: "",
    communitySize: "",
    mission: "",
    socialPlatforms: [] as string[],
    engagementRate: "",
    collaborations: "",
    agreePost: false,
    agreeEngagement: false,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (name === "agreePost" || name === "agreeEngagement") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      // Social platform checkboxes
      setFormData((prev) => ({
        ...prev,
        socialPlatforms: checked
          ? [...prev.socialPlatforms, name]
          : prev.socialPlatforms.filter((p) => p !== name),
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[v0] Form submitted:", formData);
  };

  return (
    <section className="relative bg-white py-8 lg:py-16 px-4">
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

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First and Last Name Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium mb-2"
                  >
                    First name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-[#EEEBFC] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium mb-2"
                  >
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-[#EEEBFC] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
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
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-[#EEEBFC] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium mb-2"
                >
                  Your phone number <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <div className="relative">
                    <select
                      value={formData.countryCode}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          countryCode: e.target.value,
                        }))
                      }
                      className="px-4 py-3 border-2 border-[#EEEBFC] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none pr-8"
                    >
                      <option value="+234">+234</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-3.5 w-4 h-4 pointer-events-none text-gray-600" />
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter phone number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-3 border-2 border-[#EEEBFC] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
              </div>
              {/* Community Size */}
              <div>
                <label
                  htmlFor="communitySize"
                  className="block text-sm font-medium mb-2"
                >
                  Community size (Followers/members){" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="communitySize"
                  name="communitySize"
                  placeholder="e.g 10,000"
                  value={formData.communitySize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-[#EEEBFC] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
              {/* Mission & Target Audience */}
              <div>
                <label
                  htmlFor="mission"
                  className="block text-sm font-medium mb-2"
                >
                  Mission & target audience{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="mission"
                  name="mission"
                  placeholder="Enter response"
                  rows={4}
                  value={formData.mission}
                  onChange={handleInputChange}
                  className="resize-none w-full px-4 py-3 border-2 border-[#EEEBFC] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
              {/* Social Media Platforms */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Social media platforms <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {SOCIAL_PLATFORMS.map((platform) => (
                    <label
                      key={platform.id}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name={platform.id}
                        checked={formData.socialPlatforms.includes(platform.id)}
                        onChange={handleCheckboxChange}
                        className="accent-black w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
                      />
                      <span className="text-sm">{platform.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-2">
                {/* Engagement Rate */}
                <div className="w-full lg:basis-[40%]">
                  <label
                    htmlFor="engagementRate"
                    className="block text-sm font-medium mb-2"
                  >
                    Average engagement rate{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="engagementRate"
                    name="engagementRate"
                    placeholder="Enter average rate"
                    value={formData.engagementRate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-[#EEEBFC] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
                {/* File Upload */}
                <div className="w-full lg:basis-[60%] ">
                  <label className="block text-sm font-medium mb-2">
                    Upload proof{" "}
                    <span className="text-gray-500">(Optional)</span>
                  </label>
                  <div className="flex items-center border-2 border-[#EEEBFC] rounded-lg p-2 gap-2">
                    <input
                      ref={fileInputRef}
                      type="file"
                      className="hidden"
                      onChange={() => console.log("[v0] File selected")}
                    />
                    <input
                      type="text"
                      placeholder=" Upload proof (optional)"
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
                  htmlFor="collaborations"
                  className="block text-sm font-medium mb-2"
                >
                  Post collaborations or Partnerships{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="collaborations"
                  name="collaborations"
                  placeholder="Describe previous campaigns/brands worked with"
                  rows={4}
                  value={formData.collaborations}
                  onChange={handleInputChange}
                  className="resize-none w-full px-4 py-3 border-2 border-[#EEEBFC] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
              {/* Agreement & Compliance */}
              <div className="space-y-3">
                <label className="block text-sm font-medium">
                  Agreement & Compliance <span className="text-red-500">*</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreePost"
                    checked={formData.agreePost}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm">
                    I hereby agree to post Zent video & tag official account
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreeEngagement"
                    checked={formData.agreeEngagement}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm">
                    I hereby agree to provide engagement proof
                  </span>
                </label>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

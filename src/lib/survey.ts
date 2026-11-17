export type QuestionKey = "device_access" | "internet_reliable" | "uses_tech" | "preference" | "challenge";

export const QUESTIONS: { key: QuestionKey; label: string; options: { value: string; label: string }[] }[] = [
  { key: "device_access", label: "Do you have access to a smartphone or computer?", options: [
    { value: "yes", label: "Yes, my own" }, { value: "shared", label: "Yes, shared with family" }, { value: "no", label: "No" } ] },
  { key: "internet_reliable", label: "Is your internet connection reliable?", options: [
    { value: "always", label: "Almost always" }, { value: "sometimes", label: "Sometimes" }, { value: "rarely", label: "Rarely or never" } ] },
  { key: "uses_tech", label: "Do you use technology for studying?", options: [
    { value: "daily", label: "Every day" }, { value: "sometimes", label: "Sometimes" }, { value: "never", label: "Never" } ] },
  { key: "preference", label: "Do you prefer traditional or digital learning?", options: [
    { value: "traditional", label: "Traditional" }, { value: "digital", label: "Digital" }, { value: "both", label: "A mix of both" } ] },
  { key: "challenge", label: "What is your biggest challenge when using technology for education?", options: [
    { value: "connectivity", label: "Poor connectivity" }, { value: "devices", label: "No suitable device" },
    { value: "distraction", label: "Online distractions" }, { value: "skills", label: "Not knowing how to use it" },
    { value: "cost", label: "Cost of data or devices" } ] },
];

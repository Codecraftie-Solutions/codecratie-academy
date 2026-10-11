/** What a message is about. The key can be preselected with /contact?topic=<key>. */
export const topics = [
  { key: "question", label: "A question about the programme" },
  { key: "payment", label: "Payment or my application" },
  { key: "updates", label: "Tell me about future cohorts" },
  { key: "youth", label: "Youth programmes (ages 7–18)" },
  { key: "partner", label: "Partnership or press" },
] as const;

export type TopicKey = (typeof topics)[number]["key"];
export const topicLabel = (key: string) => topics.find((t) => t.key === key)?.label;

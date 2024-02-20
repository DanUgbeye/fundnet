export type CampaignType = {
  title: string;
  description: string;
};

const CAMPAIGN_TYPES: CampaignType[] = [
  {
    title: "Principal campaigns",
    description:
      "These campaigns have fixed targets and cover causes such as session school fees (whole or part), education fees (for the duration of study), levies, etc. The funds raised for principal campaigns are paid directly to the university and are not accessible by the beneficiary.",
  },
  {
    title: "Essential campaigns",
    description:
      "These campaigns have capped targets and include causes like session scholarships (school fees and upkeep for a session), education scholarships (school fees and upkeep for the duration of study), personal upkeep, research support, educational expeditions (trips), internship support, etc.",
  },
  {
    title: "Corporate campaigns",
    description:
      "These are open campaigns with no target restrictions. They can only be raised by the university or its affiliate or allied institutions to fund specified university projects.",
  },
];

export default CAMPAIGN_TYPES;

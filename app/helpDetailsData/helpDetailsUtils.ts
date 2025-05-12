import parentCase1Option1 from './cases/parent/case-1.1.json';
import parentCase2Option1 from './cases/parent/case-2.1.json';
import parentCase2Option2 from './cases/parent/case-2.2.json';
import parentCase3Option1 from './cases/parent/case-3.1.json';
import parentCase3Option2 from './cases/parent/case-3.2.json';
import parentCase3Option3 from './cases/parent/case-3.3.json';
import parentCase3Option4 from './cases/parent/case-3.4.json';
import parentCase4Option1 from './cases/parent/case-4.1.json';
import parentCase4Option2 from './cases/parent/case-4.2.json';
import parentCase4Option3 from './cases/parent/case-4.3.json';
import parentCase5Option1 from './cases/parent/case-5.1.json';
import parentCase5Option2 from './cases/parent/case-5.2.json';
import parentCase6Option1 from './cases/parent/case-6.1.json';
import parentCase7Option1 from './cases/parent/case-7.1.json';
import parentCase8Option1 from './cases/parent/case-8.1.json';

import childCase1Option1 from './cases/child/case-1.1.json';
import childCase2Option1 from './cases/child/case-2.1.json';
import childCase2Option2 from './cases/child/case-2.2.json';
import childCase3Option1 from './cases/child/case-3.1.json';
import childCase3Option2 from './cases/child/case-3.2.json';
import childCase3Option3 from './cases/child/case-3.3.json';
import childCase3Option4 from './cases/child/case-3.4.json';
import childCase4Option1 from './cases/child/case-4.1.json';
import childCase4Option2 from './cases/child/case-4.2.json';
import childCase4Option3 from './cases/child/case-4.3.json';
import childCase5Option1 from './cases/child/case-5.1.json';
import childCase5Option2 from './cases/child/case-5.2.json';
import childCase6Option1 from './cases/child/case-6.1.json';
import childCase7Option1 from './cases/child/case-7.1.json';
import childCase8Option1 from './cases/child/case-8.1.json';

export type ContentKey = 
  "parentCase1Option1" |
  "parentCase2Option1" |
  "parentCase2Option2" |
  "parentCase3Option1" |
  "parentCase3Option2" |
  "parentCase3Option3" |
  "parentCase3Option4" |
  "parentCase4Option1" |
  "parentCase4Option2" |
  "parentCase4Option3" |
  "parentCase5Option1" |
  "parentCase5Option2" |
  "parentCase6Option1" |
  "parentCase7Option1" |
  "parentCase8Option1" |
  "childCase1Option1" |
  "childCase2Option1" |
  "childCase2Option2" |
  "childCase3Option1" |
  "childCase3Option2" |
  "childCase3Option3" |
  "childCase3Option4" |
  "childCase4Option1" |
  "childCase4Option2" |
  "childCase4Option3" |
  "childCase5Option1" |
  "childCase5Option2" |
  "childCase6Option1" |
  "childCase7Option1" |
  "childCase8Option1";

export const contentData = {
  parentCase1Option1,
  parentCase2Option1,
  parentCase2Option2,
  parentCase3Option1,
  parentCase3Option2,
  parentCase3Option3,
  parentCase3Option4,
  parentCase4Option1,
  parentCase4Option2,
  parentCase4Option3,
  parentCase5Option1,
  parentCase5Option2,
  parentCase6Option1,
  parentCase7Option1,
  parentCase8Option1,
  childCase1Option1,
  childCase2Option1,
  childCase2Option2,
  childCase3Option1,
  childCase3Option2,
  childCase3Option3,
  childCase3Option4,
  childCase4Option1,
  childCase4Option2,
  childCase4Option3,
  childCase5Option1,
  childCase5Option2,
  childCase6Option1,
  childCase7Option1,
  childCase8Option1,
};

export function getStaticHelpContent(userType: string, caseId: number, optionId: number) {
  const key = `${userType}Case${caseId}Option${optionId}` as ContentKey;
  return key in contentData ? contentData[key] : null;
}

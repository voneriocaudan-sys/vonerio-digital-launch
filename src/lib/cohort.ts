// Founding Cohort scarcity counter.
// Decrement this single constant as spots fill. It is surfaced in the
// homepage hero pill, the services hero, and anywhere else the cohort
// badge is shown.
export const COHORT_SPOTS_LEFT: number = 5;
export const COHORT_LABEL = `${COHORT_SPOTS_LEFT} spot${COHORT_SPOTS_LEFT === 1 ? "" : "s"} left`;

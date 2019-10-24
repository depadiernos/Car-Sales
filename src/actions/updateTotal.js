export const UPDATE_TOTAL = "UPDATE_TOTAL";

export function updateTotal(price) {
  return {
    type: UPDATE_TOTAL,
    payload: price
  };
}
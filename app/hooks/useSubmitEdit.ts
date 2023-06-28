/**
 * useSubmitEdit Hook
 *
 * @param {React.MutableRefObject<any[]>} formRef - The mutable ref object containing the form refs.
 * @param {number} currentIndex - The current index of the focused input field.
 *
 * @description This hook is used to handle the submission of an edit or move focus to the next input field. It takes in a formRef,
 * which is a mutable ref object containing the form refs, and currentIndex, which is the current index of the focused input field.
 * If the currentIndex is less than the length of the form refs minus 1, the hook moves the focus to the next input field.
 */
const useSubmitEdit = (formRef:React.MutableRefObject<any[]>, currentIndex:number) => {
  if (currentIndex < formRef.current.length - 1) {
    formRef.current[currentIndex + 1].focus();
  }
};

export default useSubmitEdit;
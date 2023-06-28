import { MutableRefObject } from 'react';
import { useSubmitEdit } from '../hooks';

/**
 *
 * @param {MutableRefObject<any[]>} formRefs - formrefs is an array of useRef mutable objects initialized using useInitialize ref
 * @param {number} index - current index
 */

export type handleSubmitType = (
  formRefs: MutableRefObject<any[]>,
  index: number,
) => void;

const handleSubmitEdit: handleSubmitType = (formRefs, index) =>
  useSubmitEdit(formRefs, index);

export default handleSubmitEdit;

/**
 * Toast Component
 * Displays success notification.
 */

import { toast } from "react-hot-toast";

const showSuccessToast = () => {
  toast.success("Operation completed successfully!");
};

export default showSuccessToast;
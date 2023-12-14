import { useMutation } from "@tanstack/react-query";

export const useMutationHooks = (fnCallback) => {
  const mutation = useMutation({
    mutationFn: fnCallback,
    // onSuccess: (data, variables, context) => {
    //   // Xử lý dữ liệu khi request thành công
    //   if (data.status === "ERR") {
    //     // Xử lý khi status là ERR
    //     mutation.isSuccess = false;
    //     mutation.isError = true;

    //     // Thực hiện các bước khác tùy thuộc vào trạng thái này
    //   }
    //   // Nếu không có status là ERR, các bước khác
    // },
    // onError: (error, variables, context) => {
    //   // Xử lý lỗi khi request thất bại
    // },
  });
  return mutation;
};

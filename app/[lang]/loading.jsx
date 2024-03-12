import { Spinner } from "@nextui-org/react";

export default function LoadingLayout() {
  return (
    <div className="w-full min-h-screen place-content-center flex flex-row content-center">
      <Spinner size="lg" />
    </div>
  );
}

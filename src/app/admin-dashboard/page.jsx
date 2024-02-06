"use client";
import UploadCardInfo from "@/components/uplodeinfo/uploadcardinfo";
import UplodeForm from "@/components/uplodeinfo/uplodeform";

const AdminDashboard = () => {
  return (
    <div>
      <div className="hidden sm:inline lg:inline-grid xl:inline-grid  w-full grid grid-cols-1 sm:grid-cols-12 gap-2">
        <div className="sm:col-span-8">
          <UploadCardInfo />
        </div>
        <div className="w-full sm:col-span-4 sticky top-14">
          <UplodeForm />
        </div>
      </div>
      <div className="w-full sm:hidden md:hidden lg:hidden xl:hidden grid grid-cols-1 sm:grid-cols-12 gap-2">
        <div className=" sm:col-span-8">
          <UplodeForm />
        </div>
        <div className="w-full sm:col-span-4">
          <UploadCardInfo />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

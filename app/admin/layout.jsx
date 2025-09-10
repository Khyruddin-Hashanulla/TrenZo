import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "Trenzo. - Admin",
    description: "Trenzo. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}

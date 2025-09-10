import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "Trenzo. - Store Dashboard",
    description: "Trenzo. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}

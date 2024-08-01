import SuccessCard from "@/components/applySuccess/SuccessCard";

const ApplicationSuccessfulPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  const res = await fetch(
    `http://localhost:1200/api/v1/applications/${params?.id}`
  );
  const response = await res.json();
  return (
    <>
      <SuccessCard name={response.data.fullName} />
    </>
  );
};

export default ApplicationSuccessfulPage;

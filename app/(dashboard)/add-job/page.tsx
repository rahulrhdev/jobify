import CreateJobForm from "@/components/CreateJobForm"
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

function AddJobPage() {
  const queryClient = new QueryClient()
  return (
    <>
      <CreateJobForm />
    </>
  )
}

export default AddJobPage
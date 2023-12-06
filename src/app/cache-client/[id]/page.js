"use client";
import {
  useRouter,
  useSearchParams,
  usePathname,
  useParams,
} from "next/navigation";

const SinglePage = () => {
  const router = useRouter();
  
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'

  const pathname = usePathname(); // return /cache-client/4154
  const params = useParams(); // return {id: '4154'}
  //console.log(pathname);
  return (
    <main>
      <div>
        <p onClick={() => router.back()}>Back</p>
        <h1>Single Product Page {params.id}</h1>
      </div>
    </main>
  );
};

export default SinglePage;

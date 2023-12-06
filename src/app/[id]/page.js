const SingleServerPage = ({ params, searchParams }) => {
//   console.log(params);
//   console.log(searchParams);
// In Case of Server Side Rendering we need to take params like in this way    
  return (
    <main>
      <div>
        {/* <p onClick={() => router.back()}>Back</p> */}
        <h1>Single Server Product Page {params.id}</h1>
      </div>
    </main>
  );
};

export default SingleServerPage;

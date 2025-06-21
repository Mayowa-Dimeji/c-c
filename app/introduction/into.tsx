function Introduction() {
  return (
    <section className="introflex flex flex-col lg:flex-row items-center ">
      <section className="imgintro">
        <img
          src="https://img1.wsimg.com/isteam/stock/8301/:/rs=w:1535,m"
          alt="introimg"
          className="introimg"
          width="100%"
        />
      </section>
      <section className="textintro flex flex-col  py-4 px-4">
        <h1 className="text-2xl font-bold font-josefin-sans mb-4">
          Product & Project Recruitment done perfectly!
        </h1>
        <p className=" text-gray-400">
          Connecting top project manager & product manager talent with leading
          companies.
        </p>
        <button className=" bg-white text-black ">SEARCH JOBS</button>
      </section>
    </section>
  );
}
export default Introduction;

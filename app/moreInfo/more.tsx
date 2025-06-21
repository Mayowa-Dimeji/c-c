function MoreInfo() {
  return (
    <section className="moreinfo mx-2 p-4 gap-4 ">
      <h1 className="text-xl  font-semibold text-center text-gray-400 m-10">
        About C&C Consulting
      </h1>
      <section className="infoContainer flex flex-col lg:flex-row lg:gap-8 m-4">
        <section className="infoimg ">
          <img
            src="https://img1.wsimg.com/isteam/stock/EVx4NP/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:1200,h:600,cg:true"
            alt="C&C Consulting"
            className="w-full h-auto "
          />
        </section>

        <section className="information text-center lg:text-left flex flex-col gap-4 m-2">
          <h1 className="text-lg font-bold text-center">
            Experts in Project & Product Recruitment
          </h1>
          <p>
            C&C Consulting specialises in providing tailored contract and
            permanent staffing services for the Digital, Construction, and
            Energy sectors. With deep industry knowledge, we help businesses of
            all sizes build skilled, agile teams to thrive.
          </p>
          <h3 className="font-bold text-center">What We Do: </h3>
          <ul className="list-disc pl-6 text-center">
            <li>
              Project & Product Specialist Recruitment: We specialise in
              sourcing professionals who can deliver results on time and within
              budget, whether for short-term contracts or long-term positions.
            </li>
            <li>
              Sector Expertise: From digital transformation to infrastructure
              development, we understand the nuances of each industry and bring
              the right talent to help drive your business forward.{" "}
            </li>
            <li>
              Sector Expertise: From digital transformation to infrastructure
              development, we understand the nuances of each industry and bring
              the right talent to help drive your business forward.{" "}
            </li>
            <li>
              Tailored Solutions: Our approach is consultative. We take the time
              to understand your unique requirements and culture to ensure we
              connect you with candidates who are the perfect fit.
            </li>
          </ul>
          <h3 className="font-bold text-center">Our Focus Sectors:</h3>
          <ul className="list-disc pl-6 text-center">
            <li>
              Digital: Supporting the digital transformation journey with the
              best talent in technology, software development, digital
              marketing, and more.
            </li>
            <li>
              Construction: Providing the right mix of project managers,
              surveyors & fire specialists to build the infrastructure of
              tomorrow.{" "}
            </li>
            <li>
              Energy: Ensuring the continued success and sustainability within
              the energy sector with dedicated professionals in operations,
              planning, and project management
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
}
export default MoreInfo;

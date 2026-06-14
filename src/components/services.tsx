const Services = ({ data }) => {

  return (
    <section
      id="services"
    >
      <div className="container">

        <h1 className="section-title">
          Services
        </h1>

        <p className="section-subtitle">
          What I can do for you
        </p>

        <div className="grid-3">

          {
            data?.services?.map((item) => (

              <div
                className="card"
                key={item?._id}
              >

                <h2>
                  {item?.title}
                </h2>

                <p>
                  {item?.description}
                </p>

              </div>
            ))
          }

        </div>

      </div>
    </section>
  );
};

export default Services;
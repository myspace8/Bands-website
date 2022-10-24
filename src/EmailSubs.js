export function Subscription() {
  return (
    <>
      <div className="wrapper form-container">
        <form>
          <h3>
            Subscribe with your email and hear about exclusive discounts and
            deals.
          </h3>
          <div className="form-control">
            <input type="email" placeholder="example@email.com" />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill=""
                height="48"
                width="48"
              >
                <path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

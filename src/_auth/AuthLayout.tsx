import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
    {
      isAuthenticated ? (<Navigate to="/" />) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>

          <img
            src="https://media.istockphoto.com/id/2047634126/photo/young-guy-pointing-in-giant-mobile-phone-screen-with-speech-bubbles-followers-and-heart-icons.jpg?s=612x612&w=0&k=20&c=_uxm-IMjiu2e1j4y8SkDnEN9O56FeOOUzyIirMOM8J8="
            alt="logo"
            className="hidden xl:block h-screen  object-cover bg-no-repeat"
          />
        </>
      )
    }
    </>
  )
}

export default AuthLayout

import React from "react";

export const Contact = () => {

    return (
        <div className="" style={{color: "#714994"}}>
        <div className="border-b pb-12">
          <h2 className="text-center mt-3 text-5xl font-black">¿Quieres realizar alguna consulta o solicitar una cita?</h2>
          <h4 className="text-center mt-3 text-3xl font-black">Déjame tus datos y así podré ponerme en contacto contigo</h4>
          <form>
          <div className="mt-10 p-4 columns-1 flex flex-wrap justify-center">
            <div className="col-8">
              <label htmlFor="first-name" className="block text-2xl leading-6">
                Nombre
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="mt-5 col-8">
              <label htmlFor="email" className="block text-2xl leading-6">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            </div>
            </form>
            </div>

            {/* ACA CAMBIAR POR PERFIL DE CALMA PRUEBA */}
            <div className="d-flex container">
                <script src="https://snapwidget.com/js/snapwidget.js"></script>
                <iframe src="https://snapwidget.com/embed/1068136" class="snapwidget-widget" allowtransparency="true" frameborder="0" style={{"border":"none", "overflow":"hidden",  "width":"100%"}} title="Posts from Instagram"></iframe>
            </div>
        </div>
    )
}
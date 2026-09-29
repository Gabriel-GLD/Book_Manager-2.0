function Modal({titleModal, textModal, id}) {

    return (

        <>
            <div className="" id={id}>
                <div className="">
                    <h2 className="">{titleModal}</h2>
                </div>
                <p className="">{textModal}</p>
            </div>

        </>

    )
}

export default Modal;
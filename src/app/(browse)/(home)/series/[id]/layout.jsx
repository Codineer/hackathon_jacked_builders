import ItemsBar from "../../_components/ItemsBar"
const SeriesLayout = ({ children }) => {
    return (
        <>
            <div className="bg-black w-screen h-screen">
                <ItemsBar className={"z-20  text-white flex gap-6 py-4  px-9 w-screen"} />
                {children}

            </div>




        </>
    )
}

export default SeriesLayout
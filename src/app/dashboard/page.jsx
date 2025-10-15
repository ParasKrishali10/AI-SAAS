import Metrics from "../../components/Metrics"
import QuickActions from "../../components/QuickActions"
export default function Dashboard() {
    return(
        <div className="bg-black min-h-screen">

                <div >
                    <div>
                    <Metrics></Metrics>
                    </div>
                    <div>
                        <QuickActions></QuickActions>
                    </div>

                </div>

        </div>
    )
}
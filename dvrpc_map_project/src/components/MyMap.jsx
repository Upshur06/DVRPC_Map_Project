import React, { useEffect} from 'react'
import { Map, GeoJSON } from 'react-leaflet'
import mapData from './../data/map.json'
import 'leaflet/dist/leaflet.css'

// class MyMap extends Component {
//     state = {};

//     componentDidMount(){
//         console.log(mapData)
//     }

//     render () {
//         return (
//             <div>
//                 <h1>My Map</h1>
//                 <div className='mapBorder'>
//                  <Map style={{ height: '80vh' }} zoom={10} center={[40.05, -75]}>
//                     <GeoJSON data={mapData.features} />
//                 </Map>
//              </div>
//             </div>
//         )
//     }
// }

// export default MyMap


// export const MyMap = () => {


//     useEffect(() => {
//         console.log(mapData)
//     },[])

//     return (
//         <div>
//             <h1>My Map</h1>
//             <div className='mapBorder'>
//                 <Map style={{ height: '80vh' }} zoom={10} center={[40.05, -75]}>
//                     <GeoJSON data={mapData.features} />
//                 </Map>
//             </div>
//         </div>
//     )
// }


export default function MyMap() {
  return (
    <div>
        <h1>My Map</h1>
             <div className='mapBorder'>
                 <Map style={{ height: '80vh' }} zoom={10} center={[40.05, -75.18]}>
                     <GeoJSON data={mapData.features} />
                 </Map>
            </div>
    </div>
  )
}

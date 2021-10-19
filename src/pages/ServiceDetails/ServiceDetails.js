
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const { services } = useServices();
    const service = services.find(service => service.id == serviceId);
    return (
        <div className="relative bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-3 rounded-lg w-2/6 mx-auto">
            <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src={service?.img} alt="" />
            <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-gray-900 poppins text-lg font-medium">{service?.title}</h1>
                <p className="text-gray-500 poppins text-sm text-center">{service?.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;

export const Card = ({item,onCardImage}) => {
  return (
    <div key={item.id} className="group relative">
      <div 
      onClick={() => onCardImage(item)}
      className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img
          src={item.flickr_images[0]}
          alt="dad ad"
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-xl">{item.rocket_name}</h3>
          <p className="text-gray-400">
            Company: <span className="text-gray-600">{item.company}</span>
          </p>
        </div>
        <p className="text-sm font-medium text-gray-900">{item.price}</p>
      </div>
      <div>
        <div>
          <p className="text-gray-400">
            Country: <span className="text-gray-600">{item.country}</span>
          </p>
        </div>
        <div>
          <p className="text-gray-400">
            Cost: <span className="text-gray-600">${item.cost_per_launch}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Separation = () => {
    return (
        <div className="flex" style={{ height: '100px' }}>
            <div className="flex grow border-gray-700 border-r-2" style={{ width: '300px', height: '100px' }}></div>
            <div className="flex grow border-gray-700 border-l-2" style={{ width: '300px', height: '100px' }}></div>
        </div>
    );
};

export default Separation;

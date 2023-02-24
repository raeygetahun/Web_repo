const done = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content revealfrombottom">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <br/>
            <time>{data.startdate} - {data.enddate}</time> 
            <p>{data.text}</p>
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )}
            <span className="circle" />
        </div>
    </div>
);

export default done;
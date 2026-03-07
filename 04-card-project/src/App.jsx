import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
      company: "Meta",
      datePosted: "2 days ago",
      post: "Senior Frontend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Menlo Park, USA",
    },
    {
      brandLogo: "https://images.seeklogo.com/logo-png/27/1/apple-logo-png_seeklogo-272825.png",
      company: "Apple",
      datePosted: "5 days ago",
      post: "iOS Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$78/hr",
      location: "Cupertino, USA",
    },
    {
      brandLogo: "https://americanbazaaronline.com/wp-content/uploads/2015/02/Amazon-Logo.jpg",
      company: "Amazon",
      datePosted: "1 week ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$92/hr",
      location: "Seattle, USA",
    },
    {
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      company: "Netflix",
      datePosted: "3 days ago",
      post: "Backend Engineer – Streaming",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hr",
      location: "Los Gatos, USA",
    },
    {
      brandLogo: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
      company: "Google",
      datePosted: "10 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$68/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
      company: "Microsoft",
      datePosted: "2 weeks ago",
      post: "DevOps Engineer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/020/190/499/non_2x/nvidia-logo-nvidia-icon-free-free-vector.jpg",
      company: "NVIDIA",
      datePosted: "4 days ago",
      post: "GPU Systems Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Santa Clara, USA",
    },
    {
      brandLogo: "https://www.salesforce.com/news/wp-content/uploads/sites/3/2024/02/Salesforce-logo.jpg?w=1414&h=796&crop=1",
      company: "Salesforce",
      datePosted: "6 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwQfjxYHgFGWPe6kpIwq3xWtlcSrBgjqfbA&s",
      company: "Adobe",
      datePosted: "3 weeks ago",
      post: "UI/UX Engineer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$52/hr",
      location: "Noida, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnM8U7Fu9UbOMCakFdEen8a8sl_EavE10XHw&s",
      company: "Uber",
      datePosted: "1 day ago",
      post: "Data Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$74/hr",
      location: "San Francisco, USA",
    },
  ];

  console.log(jobOpenings)
  return (
    <div className="parent">
      {jobOpenings.map(function(elem,idx){


        return <div key={idx}>
        
        <Card company={elem.company} post={elem.post}
        datePosted={elem.datePosted} location={elem.location}
        tag1={elem.tag1} tag2={elem.tag2} brandLogo={elem.brandLogo}  pay={elem.pay} />
        </div>
      })}
    </div>
  );
};

export default App;

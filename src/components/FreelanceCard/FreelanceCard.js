import React from 'react'
import Heading from '../Common/Heading'
import FeedbackCard from '../Common/FeedbackCard';

const FreelanceCard = () => {

const FeedbackCardData = [
  {
    text: "The digital innovation in this app has truly transformed my financial experience. It’s a must-have!",
    authorName: "Jessica Pandaan",
    authorDesc: "Product Manager at FinovateX",
  },
  {
    text: "The user-friendly interface makes managing finances a breeze. Best financial app out there!",
    authorName: "Mark Holloway",
    authorDesc: "Freelance Web Developer",
  },
  {
    text: "The debt management system is excellent. It’s helped me pay off my debts faster and regain control of my finances",
    authorName: "Leila Thompson",
    authorDesc: "Content Creator",
  },
  {
    text: "The investment tracker keeps me updated on my portfolio performance. It’s like having a personal financial advisor!",
    authorName: "Asana Malik",
    authorDesc: "Equity Analyst at InvestIQ",
  },
  // {
  //   text: "I love how the app categorizes my spending automatically. It’s changed how I budget every month!",
  //   authorName: "David Kim",
  //   authorDesc: "UX Designer at BrightApps",
  // },
];


  return (
    <div className='bg-[#F2F9FE]   flex flex-col justify-center items-center'>
<div className='mt-28'>
      <Heading
textSize='text-2xl md:text-5xl'
text={"What our freelances talking"} />

</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  my-10 min-h-36  w-full max-w-[90%] ">
        {FeedbackCardData.map((item, index) => (
          <FeedbackCard
            key={index}
            text={item.text}
            authorName={item.authorName}
            authorDesc={item.authorDesc}
          />
        ))}
      </div>
    </div>
  )
}

export default FreelanceCard
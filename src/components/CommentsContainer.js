import React from "react";
import Comment from "./Comment";
const commentsData = [
  {
    name: "Ekata Kumari",
    text: "LLLlllslj.fr bbgtbnv",
    replies: [
      {
        name: "Ekata Kumari",
        text: "LLLlllslj.fr bbgtbnv",
        replies: [
            {
                name: "Ekata Kumari",
                text: "LLLlllslj.fr bbgtbnv",
                replies: [
                    {
                        name: "Ekata Kumari",
                        text: "LLLlllslj.fr bbgtbnv",
                        replies: [
                            {
                                name: "Ekata Kumari",
                                text: "LLLlllslj.fr bbgtbnv",
                                replies: [],
                              },
                        ],
                      },
                ],
              },
        ],
      },
      {
        name: "Ekata Kumari",
        text: "LLLlllslj.fr bbgtbnv",
        replies: [
            {
                name: "Ekata Kumari",
                text: "LLLlllslj.fr bbgtbnv",
                replies: [
                    {
                        name: "Ekata Kumari",
                        text: "LLLlllslj.fr bbgtbnv",
                        replies: [],
                      },
                ],
              },
        ],
      },
    ],
  },
  {
    name: "Ekata Kumari",
    text: "LLLlllslj.fr bbgtbnv",
    replies: [
        {
            name: "Ekata Kumari",
            text: "LLLlllslj.fr bbgtbnv",
            replies: [],
          },
    ],
  },
  {
    name: "Ekata Kumari",
    text: "LLLlllslj.fr bbgtbnv",
    replies: [
        {
            name: "Ekata Kumari",
            text: "LLLlllslj.fr bbgtbnv",
            replies: [],
          },
    ],
  },
  {
    name: "Ekata Kumari",
    text: "LLLlllslj.fr bbgtbnv",
    replies: [
        {
            name: "Ekata Kumari",
            text: "LLLlllslj.fr bbgtbnv",
            replies: [
                {
                    name: "Ekata Kumari",
                    text: "LLLlllslj.fr bbgtbnv",
                    replies: [],
                  },
            ],
          },
    ],
  },
];
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h2 className="text-2xl font-bold">Comments:</h2>
      <CommentsList comments={commentsData} />
    </div>
  );
};
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
export default CommentsContainer;

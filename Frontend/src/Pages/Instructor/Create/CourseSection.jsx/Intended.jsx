export default function Intended() {
    return (<form><div>

        <p className=" text-left">The following descriptions will be publicly visible on your Course Landing Page and will have a direct impact on your course performance. These descriptions will help learners decide if your course is right for them.</p>
        <h4 className=" text-left top-30 left-20  font-bold font-serif mt-12 mb-2">What will students learn in your course?</h4>
        <p className="text-left mb-4">You must enter at least 4 learning objectives or outcomes that learners can expect to achieve after completing your course.</p>

        <div className="space-y-4">
            <input
                type="text"
                placeholder="  Example: Roles and Responsibilities of a Project Manager"
                className="border border-black-300 p-2 w-full mb-5"
            />
        </div>
        <div className="space-y-4">
            <input
                type="text"
                placeholder="  Example: Estimate Project Timelines and Budgets"
                className="border border-black-300 p-2 w-full mb-5"
            />
        </div>
        <div className="space-y-4">
            <input
                type="text"
                placeholder="  Example: Identify and Manage Project Risks"
                className="border border-black-300 p-2 w-full mb-5"
            />
        </div>
        <div className="space-y-4">
            <input
                type="text"
                placeholder="  Example: Complete a Case Study to Manage a Project from Conception to Completion"
                className="border border-black-300 p-2 w-full mb-5"
            />
        </div>

    </div>
        <div>
            <h4 className="text-left top-30 left-20 font-bold font-serif mb-2 mt-4">What are the requirements or prerequisites for taking your course?</h4>
            <p className="text-left mb-4">List the required skills, experience, tools or equipment learners should have prior to taking your course.
                If there are no requirements, use this space as an opportunity to lower the barrier for beginners.</p>
            <input
                type="text"
                placeholder="  Example: No programming experience needed. You will learn everything you need to know."
                className="border border-black-300 p-2 w-full mb-5"
            />
        </div>
        <div>
            <h4 className="text-left top-30 left-20 font-bold font-serif mb-4">Who is this course for?</h4>
            <p className="text-left">Write a clear description of the intended learners for your course who will find your course content valuable.
                This will help you attract the right learners to your course.</p>
            <input
                type="text"
                placeholder="  Example: No programming experience needed. You will learn everything you need to know."
                className="mb-8 border border-black-300 p-2 w-full mb-5"
            />

        </div>
                       </form>);
}
from students.views import loginStudent,Astudent,Students
from Schools.views import( 
    SchoolsDetails,
    CourseDetails,
    CourseResourseDetails,
    ListUpdateDeleteCourseDetails,
    ListUpdateDeleteCourseResourseDetails,
    ListUpdateDeleteSchoolDetails)
from rest_framework.decorators import api_view
from rest_framework.response import Response


# student section
@api_view(["POST"])
def login_student_api(request):
    """Calls student app's login function"""
    # print(f"login details sent to loin api:{request.data}")
    return loginStudent(request)

RegisterAndRetrieveStudentBio = Students.as_view()
RetrieveUpdateDeleteStudent = Astudent.as_view()



# school section

# createAndViewSchooldetails = SchoolsDetails.as_view()
createAndViewSchooldetails = SchoolsDetails.as_view()

createAndViewCoursedetails = CourseDetails.as_view()
createAndviewCourseRecoursedetails = CourseResourseDetails.as_view()

fetchUpdateDeleteSchool =  ListUpdateDeleteSchoolDetails.as_view()
fetchUpdateDeleteCourse = ListUpdateDeleteCourseDetails.as_view()
fetchUpdateDeleteCourseResourse = ListUpdateDeleteCourseResourseDetails.as_view()

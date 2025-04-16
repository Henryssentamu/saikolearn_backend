from students.views import loginStudent,AstudentBio,Students
from Schools.views import( 
    SchoolsDetails,
    CourseDetails,
    CourseResourseDetails,
    ListUpdateDeleteCourseDetails,
    ListUpdateDeleteCourseResourseDetails,
    ListUpdateDeleteSchoolDetails)
from rest_framework.decorators import api_view,  permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.http import JsonResponse



# student section
@api_view(["POST"])
@permission_classes([AllowAny]) 
def login_student_api(request):
    try:
        """Calls student app's login function"""
        print(f"login details sent to loin api:{request.data}")
        return loginStudent(request)
    except Exception as e:
        print(f"in helper:{e}")

    return "yes"


RegisterAndRetrieveStudentBio = Students.as_view()
RetrieveUpdateDeleteStudent = AstudentBio.as_view()



# school section

# createAndViewSchooldetails = SchoolsDetails.as_view()
createAndViewSchooldetails = SchoolsDetails.as_view()

createAndViewCoursedetails = CourseDetails.as_view()
createAndviewCourseRecoursedetails = CourseResourseDetails.as_view()

fetchUpdateDeleteSchool =  ListUpdateDeleteSchoolDetails.as_view()
fetchUpdateDeleteCourse = ListUpdateDeleteCourseDetails.as_view()
fetchUpdateDeleteCourseResourse = ListUpdateDeleteCourseResourseDetails.as_view()

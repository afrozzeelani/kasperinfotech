
    var attendanceModule =angular.module ("attendanceModule",[]);

    attendanceModule.controller("attendanceTaker", function($scope){
        var students=[
            {
                name:"afroz",
                reg:12345,
                roll:1,
                attendance:"p"
            },
            {
                name:"afroz",
                reg:12345,
                roll:1,
                attendance:"p"
            },
            {
                name:"afroz",
                reg:12345,
                roll:1,
                attendance:"p"
            },
            {
                name:"afroz",
                reg:12345,
                roll:1,
                attendance:"p"
            },
            {
                name:"afroz",
                reg:12345,
                roll:1,
                attendance:"p"
            },


        ];

        $scope.student= students;
        var attendance="p";
        var total=students.length;
        var p=total;
        var a=0;
        // $scope.id = "0";


        $scope.getId=(reg,index)=> {
            id=reg;
            attendance=students[index].attendance;

            var ele=angular.element(document.getElementById(reg));
            if(attendance =="a"){
                ele.addClass("absentMarked");
                console.log(absent)
            }else{
                ele.removeClass("absentMarked");
            }
        };
        $scope.getClass=reg=>{
            if(attendance="a")
            return id== reg ? "absent" : "false";
            else
            return id ==reg ? "present" : "false";
        }
    $scope.totalCount=()=>{
        var count=angular.element(document.querySelectorAll(".absentMarked"));
        a= count.length;
        $scope.p=p-1;
        $scope.a=a;
    };
        $scope.total=total;
        $scope.p=a;
        $scope.a=a;

        $scope.submitForm=()=>{
            alert("form submited");
        }





    });




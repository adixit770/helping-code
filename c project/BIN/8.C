void main()
{int i,s=1;
int maths,enghish,hindi,science,social science,sum;
float result;
puts("enter the marks out of 100");
for(i=0;i<s;i++);
       {
	puts("maths= ");
	scanf("%d",&maths);
	puts("english= ");
	scanf("%d",&english);
	puts("hindi= ");
	scanf("%d",&hindi);
	puts("science= ");
	scanf("%d",&science);
	puts("social science= ");
	scanf("%d",&social science);
       }
    sum=math+english+hindi+science+social science;
    result=sum/5;
    printf("total percentage is : %f%",result);
    if(result>=60)
    puts("you passed with 1st division");
     else if(result>=50)
      puts("you passed with 2nd division");
       else if(result>35)
	puts("you passed with 3rd division");
	 else
	  puts("you failed,\n try again");
	  getch();
}

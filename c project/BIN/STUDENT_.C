#include<stdio.h>
struct std
{
char name[30];
int rollno;
int status;
char father[26];
char mobile[20];
char address[50];
};
int i,j,s,a,b=0,r;
int maths,english,hindi,science,socialscience,sum;
char g[50];
float result=0;
struct std *p;

void find()
{
int f=0,n;
clrscr();
puts("press 1 to search by roll number\npress 0 to search by other details");
scanf("%d",&n);
if(n)
{
puts("enter rollnumber");
scanf("%d",&r);
}
else
puts("enter other details");
fflush(stdin);
gets(g);

for(i=0;i<s;i++)
{
     if(strcmp(g,p[i].name)==0||strcmp(g,p[i].father)==0||strcmp(g,p[i].address)==0||strcmp(g,p[i].mobile)==0||p[i].rollno==r)
{
 f=1;
 printf("name : %s\n",p[i].name);
  printf("roll number : %d\n",p[i].rollno);
   printf("father name : %s\n",p[i].father) ;
    printf("mobile number : %s\n",p[i].mobile);
     printf("address : %s\n",p[i].address);
       if(b){
     printf("maths :%d\nenglish :%d\nhindi :%d\nscience :%d\nsocialscience :%d\n",maths,english,hindi,science,socialscience);
     printf("your result is : %.2f%",result);}
}
}
       if(f==0)
       puts("not found");
}

void update_marks()
{

find();
b=1;
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
	puts("socialscience= ");
	scanf("%d",&socialscience);
       }
    sum=maths+english+hindi+science+socialscience;
    result=sum/5;
    printf("total percentage is : %.2f%",result);
    if(result>=60)
    puts("you passed with 1st division");
     else if(result>=50)
      puts("you passed with 2nd division");
       else if(result>35)
	puts("you passed with 3rd division");
	 else
	  puts("you failed,\n try again");
}

void add_student_info()

	{

		for(i=0;i<s;i++)
	{
		L:
	clrscr();
	fflush(stdin);
	printf("enter the name : ");
	gets(p[i].name);

	printf("enter the roll number :");
	scanf("%d",&p[i].rollno);
	fflush(stdin);
	printf("enter father name  : ");
	gets(p[i].father);

	printf("enter mobile number :");
	gets(p[i].mobile);

	printf("enter address :");
	gets(p[i].address);
	 p[i].status=1;

for(j=0;j<i;j++)
{
if(p[i].rollno==p[j].rollno)
{
printf("already exits");
goto L;
 }
}
}
}

void show()
{
clrscr();
printf("display student information\n");
for(i=0;i<s;i++)
{
 if(p[i].status==1){
printf("------------------------\n");
printf("name : %s\n",p[i].name);
 printf("roll number : %d\n",p[i].rollno);
  printf("father name : %s\n",p[i].father) ;
   printf("mobile number : %s\n",p[i].mobile);
    printf("address : %s\n",p[i].address); }


}
}
void erase()
{
int status=0,x;
puts("enter roll number which you want to delete\n ");
scanf("%d",&x);
for(i=0;i<s;i++)

if(p[i].rollno==x)
break;
if(i==s)
puts("record not found");
for(;i<s;i++)
p[i]=p[i+1];
s--;
puts("record delete successfully");

}

void main()
{
int ch;
clrscr();
	printf("enter the size: ");
	scanf("%d",&s);
p=(struct std*)malloc(sizeof(struct std)*s);

while(1)
{
 printf("enter 1 to add student info\n");
  printf("enter 2 to show student data\n");
   printf("enter 3 to find student data\n");
    printf("enter 4 to update marks\n");
     printf("enter 5 to erase data\n");
      printf("enter 6 to clear screen\n");
       printf("enter 7 to exit\n");
	printf("enter the choice\n");
scanf("%d",&ch);
fflush(stdin);
switch (ch){
case 1:add_student_info();
       break;
case 2:show();
	break;
case 3:find();
	break;
case 4:update_marks();
	break;
case 5:erase();
	break;
case 6: clrscr();
case 7:exit(1);
default:printf("invalid choice");
}}
getch();
}
struct std
{
int rollno;
char name[20];
}s[4];
void main()
{
int i,j,n,f=0;
clrscr();
for(i=0;i<4;i++)
{
L:
printf("enter the name :-");
scanf("%s",&s[i].name);
printf("enter the the roll number :-");
scanf("%d",&s[i].rollno);

for(j=0;j<i;j++)
{
if(s[i].rollno==s[j].rollno){
printf("already exits");
goto L;}
 }
 }
printf("display student information\n");
for(i=0;i<4;i++)
printf("%s-%d\n",s[i].name,s[i].rollno);

printf("enter the number");
scanf("%d",&n);
for(i=0;i<4;i++)
{
if(s[i].rollno==n)
{
f=1;
printf("name:-%s rollno:-%d",s[i].name,s[i].rollno);
getch();
}}}

struct std
{
int rollno;
char name[20];
};
int i,j,f=0,n,s;
struct std*p;

void add()
{
printf("enter the size: ");
scanf("%d",&s);
clrscr();
for(i=0;i<s;i++)
{
L:
printf("enter the name : ");
scanf("%s",&p[i].name);
printf("enter the the roll number : ");
scanf("%d",&p[i].rollno);

for(j=0;j<i;j++)
{
if(p[i].rollno==p[j].rollno){
printf("already exits");
goto L;}
 }
 }
 }

void show()
{
clrscr();
printf("display student information\n");
for(i=0;i<s;i++)
printf("%s-%d\n",p[i].name,p[i].rollno);
}

void find(){
clrscr();
printf("enter the number");
scanf("%d",&n);
for(i=0;i<s;i++)
{
if(p[i].rollno==n)
{
f=1;
printf("name:-%s rollno:-%d",p[i].name,p[i].rollno);
}
}
if(f==0)
printf("not found");
}
void del()
{  clrscr();
printf("enter the number you want to delete\n");
scanf("%d",&n);
	for(i=0;i<s;i++){
	if(p[i].rollno==n){
	for(j=i;j<s;j++){
	p[j]=p[j+1];}

}printf("%s %d\n",p[i].name,p[i].rollno);
}
}
void main()
{
int ch;
clrscr();
p=(struct std*)malloc(sizeof(struct std)*s);

while(1)
{
printf("enter 1 to add data\n");
printf("enter 2 to show data\n");
printf("enter 3 to find data\n");
printf("enter 4 to delete data\n");
printf("enter 5 to exit\n");
printf("enter the choise\n");
scanf("%d",&ch);

switch (ch){
case 1:add ();
       break;
case 2:show();
	break;
case 3:find();
	break;
case 4:del();
	break;
case 5:exit(1);
default:printf("invelid choise");
}}
getch();
}
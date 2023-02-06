

#include<stdio.h>
struct node
{
int data;
struct node *link;
};

struct node*top=NULL;
struct node*temp=NULL;

// To Creat Memory

struct node*creatMemory()

{

temp=(struct node*)malloc(sizeof(struct node));
temp->link=NULL;

return temp;

}

//To Add Data

int addData()
 {
  int data;

 printf("enter data");
scanf("%d",&data);
temp->data=data;

return 1;

}

//To push

int push()
{
   if(top==NULL)
  {
  top=temp;
  }
  else
  {
 temp->link=top;
  top=temp;
  }
  temp=NULL;
return 1;
}
//to pop
void pop()
{
if(top==NULL)
{
printf("*****stack is empaty*****");
}
else
{
temp=top;
top=top->link;
printf("\n poped value is %d",temp->data);
free(temp);
}
}
//To Print Data

void printData()
{

clrscr();
 if(top==NULL)
 {
 printf("*****stack is empaty****** ");
 }
 else
 {
 temp=top;
 while(temp!=NULL)
 {
 printf("%d ->",temp->data);
 temp=temp->link;
 }
 }
 }

//Main Function

void main()
{
int ch;
struct node*temp;
clrscr();

while(temp!=NULL)
{

puts("enter 1 to push");
puts("enter 2 to pop");
puts("enter 3 to print data");
puts("enter 4 to exit");
puts("enter choice");
scanf("%d",&ch);

 switch(ch)
 {
 case 1:creatMemory();
	addData();
	push();
	break;

 case 2:pop();
	break;
case 3: printData();
	break;
 case 4:exit(10);

 default : ("invalid choice");
 }
 }
 getch();
 }



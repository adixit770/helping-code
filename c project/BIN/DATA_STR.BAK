

#include<stdio.h>
struct node
{
int data;
struct node *link;
};

struct node*start=NULL;
struct node*current=NULL;
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

//To Link At Last Position

int linkAtLastPos()
{
   if(start==NULL)
  {
  start=current=temp;
  }
  else
  {
  current->link=temp;
  current=temp;
  }
  temp=NULL;
return 1;

}

//To Link At Frist Position

int linkAtFristPos()
{
  if(start==NULL)
  {
   start=current=temp;
   }
   else
   {
   temp->link=start;
     start=temp;
   }
   temp=NULL;

   return 1;

}
//to creat nth position
int linkAtNthPos()
{
int p,count=1;
struct node*temp2;
puts("enter position");
scanf("%d",&p);

 temp2=start;
while(count<p-1)
{
temp2=temp2->link;
count++;
}
temp->link=temp2->link;
temp2->link=temp;

return 1;
}
//to delete nth position
void deleteNthPos()
{
int p,count=1;
struct node*temp2;
puts("enter position");
scanf("%d",&p);
temp=start;
while(count<p-1)
{
temp=temp->link;
count++;
}
temp2=temp->link;
temp->link=temp->link->link;
temp2->link=NULL;
free(temp2);

}

//to delete firts position
void deleteAtFirstPos()
{
struct node*temp2;
temp2=start;
start=start->link;

free(temp2);

}

//to delete last position
void deleteAtLastPos()
{
struct node*temp2;
temp=start;
while(temp->link->link!=NULL)
{
temp=temp->link;
}
temp2=temp->link;
temp->link=NULL;
current=temp;

free(temp2);

}

//To Print Data

void printData()
{
clrscr();
  temp = start;

  while(temp!=NULL)
  {
  printf("%d ->",temp->data);
  temp=temp->link;
  }
   printf("NULL");
     printf("\n");


}

//To search Data

void searchData()
{
int n;
clrscr();
puts("enter number");
scanf("%d",&n);
  temp = start;

  while(temp!=NULL)
  {
  if(temp->data==n)
     {
  printf("%d is found",n);
  break;
      }
  temp=temp->link;
  }
  if(temp->data!=n)
  {
  puts("Not found");
  }

     printf("\n");


}


//Main Function

void main()
{
int ch;
struct node*temp;
clrscr();

while(temp!=NULL)
{

puts("enter 1 to link at last position");
puts("enter 2 to link at first position");
puts("enter 3 to link at nth position");
puts("enter 4 to print data");
puts("enter 5 to delete nth position");
puts("enter 6 to delete first position");
puts("enter 7 to delete last position");
puts("enter 8 to search");
puts("enter 9 to exit");
puts("enter choice");
scanf("%d",&ch);

 switch(ch)
 {
 case 1:creatMemory();
	addData();
	linkAtLastPos();
	break;
 case 2:creatMemory();
	addData();
	linkAtFristPos();
	break;
case 3: creatMemory();
	addData();
	linkAtNthPos();
 case 4:printData();
	break;
 case 5: deleteNthPos();
	 break;
 case 6:deleteAtFirstPos();
	 break;
 case 7:deleteAtLastPos();
	break;
 case 8:searchData();
	break;
 case 9:exit(10);


 default : ("invalid choice");
 }
 }
 getch();
 }



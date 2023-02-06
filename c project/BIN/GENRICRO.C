int genricroot(n)
{
int reminder,sum=0;
while(n!=0)
{
reminder=n%10;
sum=sum+reminder;
n=n/10;
}
if(sum>9)

return (sum%10)+genricroot(sum/10);
else
return sum;
}
void main()
{
int n;
clrscr();
printf("enter the number");
scanf("%d",&n);
printf("%d",genricroot(n));
getch();
}

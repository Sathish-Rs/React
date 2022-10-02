namespace WebApplication77.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class customer : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Customers",
                c => new
                    {
                        Customer_Id = c.Int(nullable: false, identity: true),
                        Customer_Name = c.String(),
                        State_Id = c.Int(),
                        City_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Customer_Id)
                .ForeignKey("dbo.Cities", t => t.City_Id)
                .ForeignKey("dbo.States", t => t.State_Id)
                .Index(t => t.State_Id)
                .Index(t => t.City_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Customers", "State_Id", "dbo.States");
            DropForeignKey("dbo.Customers", "City_Id", "dbo.Cities");
            DropIndex("dbo.Customers", new[] { "City_Id" });
            DropIndex("dbo.Customers", new[] { "State_Id" });
            DropTable("dbo.Customers");
        }
    }
}

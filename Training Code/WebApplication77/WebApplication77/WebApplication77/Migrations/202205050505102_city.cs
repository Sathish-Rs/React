namespace WebApplication77.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class city : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Cities",
                c => new
                    {
                        City_Id = c.Int(nullable: false, identity: true),
                        City_Name = c.String(),
                        State_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.City_Id)
                .ForeignKey("dbo.States", t => t.State_Id, cascadeDelete: true)
                .Index(t => t.State_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Cities", "State_Id", "dbo.States");
            DropIndex("dbo.Cities", new[] { "State_Id" });
            DropTable("dbo.Cities");
        }
    }
}

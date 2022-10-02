namespace WebApplication77.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class statetable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.States",
                c => new
                    {
                        State_Id = c.Int(nullable: false, identity: true),
                        State_Name = c.String(),
                    })
                .PrimaryKey(t => t.State_Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.States");
        }
    }
}

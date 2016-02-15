package sd.models;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

public class ProjectTest {
    @Test
    public void toJSON() throws Exception {
        Project project = getProject();
        ObjectMapper mapper = new ObjectMapper();
        String s = mapper.writeValueAsString(project);
        System.out.println(s);

    }

    @Test
    public void fromJSON() throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        String s = getString();
        Project project = mapper.readValue(s, Project.class);
        System.out.println(project);
    }

    @Test
    public void toJSONWithSubclass() throws Exception {
        Project project = getProjectWithMaterialSubclass();

        ObjectMapper mapper = new ObjectMapper();
        String s = mapper.writeValueAsString(project);
        System.out.println(s);
    }

    @Test
    public void fromJSONWithSubclass() throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        String s = getStringWithSubclass();
        Project project = mapper.readValue(s, Project.class);
        System.out.println(project);
    }

    private Project getProjectWithMaterialSubclass() {
        List<CustomMaterial> materials = new ArrayList<>();
        materials.add(new Board("111", "material", "board12", "parentId"));
        materials.add(new Subrack("111", "material", "subrack12", "0,1,2"));

        List<CustomModel> models = new ArrayList<>();
        models.add(new CustomModel("11", "model11", "model11_status", materials));

        return new Project("1", "project1", "project_status", models);
    }

    private Project getProject() {
        List<CustomMaterial> materials = new ArrayList<>();
        materials.add(new CustomMaterial("111", "material", "type"));

        List<CustomModel> models = new ArrayList<>();
        models.add(new CustomModel("11", "model11", "model11_status", materials));

        return new Project("1", "project1", "project_status", models);
    }

    private String getString() {
        return "{\n" +
                "  \"id\": \"1\",\n" +
                "  \"name\": \"project1\",\n" +
                "  \"status\": \"project_status\",\n" +
                "  \"models\": [\n" +
                "    {\n" +
                "      \"id\": \"11\",\n" +
                "      \"name\": \"model11\",\n" +
                "      \"status\": \"model11_status\",\n" +
                "      \"materials\": [\n" +
                "        {\n" +
                "          \"id\": \"111\",\n" +
                "          \"name\": \"material\",\n" +
                "          \"type\": \"CustomMaterial\"\n" +
                "        }\n" +
                "      ]\n" +
                "    }\n" +
                "  ]\n" +
                "}\n";
    }

    private String getStringWithSubclass() {
        return "{\n" +
                "  \"id\": \"1\",\n" +
                "  \"name\": \"project1\",\n" +
                "  \"status\": \"project_status\",\n" +
                "  \"models\": [\n" +
                "    {\n" +
                "      \"id\": \"11\",\n" +
                "      \"name\": \"model11\",\n" +
                "      \"status\": \"model11_status\",\n" +
                "      \"materials\": [\n" +
                "        {\n" +
                "          \"id\": \"111\",\n" +
                "          \"name\": \"material\",\n" +
                "          \"type\": \"board\",\n" +
                "          \"parentId\": \"parentId\"\n" +
                "        },\n" +
                "        {\n" +
                "          \"id\": \"111\",\n" +
                "          \"name\": \"material\",\n" +
                "          \"type\": \"subrack\",\n" +
                "          \"slots\": \"0,1,2\"\n" +
                "        }\n" +
                "      ]\n" +
                "    }\n" +
                "  ]\n" +
                "}\n";
    }
}
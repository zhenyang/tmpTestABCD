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
                "          \"type\": \"type\"\n" +
                "        }\n" +
                "      ]\n" +
                "    }\n" +
                "  ]\n" +
                "}\n";
    }

    private Project getProject() {
        List<CustomMaterial> materials = new ArrayList<>();
        materials.add(new CustomMaterial("111", "material", "type"));

        List<CustomModel> models = new ArrayList<>();
        models.add(new CustomModel("11", "model11", "model11_status", materials));


        return new Project("1", "project1", "project_status", models);
    }
}